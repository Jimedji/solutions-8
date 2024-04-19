// BEGIN
export default function convert(...dates) {
    if (dates.length === 0) {
        return [];
    }
    return dates.map(date => new Date(...date).toDateString());
}
// END