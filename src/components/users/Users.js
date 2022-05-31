import classes from "./users.module.css"

function Users (props) {

    return (
        <div className={classes.table}>
            <div className='block__main'>
                <div className="block">Users</div>
                {props.propsUsers.map((user, key) => {
                    return (
                        <div key={key} className="block">User {user.id}</div>
                    )
                })}
            </div>
            <div className='main__block name'>
                <div className='block'>Name</div>
                {props.propsUsers.map((user, key) => {
                    return (
                        <div key={key} className="block">User {user.name}</div>
                    )
                })}
            </div>
            <div className="main__block">
                <div className="block">Email</div>
                {props.propsUsers.map((user, key) => {
                    return (
                        <div key={key} className="block">User {user.email}</div>
                    )
                })}
            </div>
            <div className='main__block'>
                <div className="block">Username</div>
                {props.propsUsers.map((user, key) => {
                    return (
                        <div key={key} className="block">User {user.username}</div>
                    )
                })}
            </div>
        </div>
    )

}

export default Users;