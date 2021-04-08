import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unFollow,
  toogleIsFollowingProgress,
  getUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preLoader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFentching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFentching: state.usersPage.isFentching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// let withRedirect = withAuthRedirect(UsersContainer);

// export default withAuthRedirect(UsersContainer);

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toogleIsFollowingProgress,
    getUsers,
  })
)(UsersContainer);
