import _ from 'lodash';

// BEGIN
export default function takeOldest(users, count = 1) {
    const sortedUsers = users.sort((a, b) => Date.parse(a.birthday) - Date.parse(b.birthday));
    return sortedUsers.slice(0, count);
}
// END