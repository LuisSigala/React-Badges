import React from "react"
import { Link } from "react-router-dom"
import "./style/BadgesList.css"

class BadgesListItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="BadgesListItem mt-5">
                    <div className="col-5">
                        <div className="Item__profilePicture">
                            <img src={this.props.badge.profile_picture_url} alt="Profile_picture" />
                        </div>
                        <div className="Item__background">
                            <img src={this.props.badge.header_img_url} alt="profile_picture" />
                        </div>
                    </div>
                    <div className="col-7 my-5">
                        <div className="row">
                            <h4 className="text-center mt-3">
                                {this.props.badge.name} <i>{this.props.badge.age}</i>
                            </h4>
                            <p className="text-center">{this.props.badge.city}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const useSearchBadges = badges => {

    const [query, setQuery] = React.useState('');
    const [filteredBadges, setfilteredBadges] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return '${badge.name}'.toLowerCase().includes(query.toLowerCase);
        });

        setfilteredBadges(result);
    }, [badges, query]);


    return { query, setQuery, filteredBadges };
};

const BadgesList = props => {
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);


    if (filteredBadges.lenght == 0) {
        return (
            <div className="">
                <div className="form.group">
                    <label>Filter Badges</label>
                    <input
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                    <h3>No badges were found.</h3>
                    <Link className="btn btn-success" to="/new">
                        Create new badge
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="BadgesList">
                <div className="container List mb-5">
                    <div className="list-unstyled">
                        {props.badges.map((badge) => {
                            return (
                                <div key={badge._id}>
                                    <Link className="text-reset text-decoration-none" to={'/${badge._id}'}>
                                        <BadgesListItem badge={badge}></BadgesListItem>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BadgesList;