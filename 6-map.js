// BEGIN
export default function getChildren(users) {
    return users.reduce((acc, user) => {
        return acc.concat(user.children);
    }, []);
}
// END