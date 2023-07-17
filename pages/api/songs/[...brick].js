//or [...slug].js
//All routes, as long as we enter more than one dynamic parameter after /tasks, [].js won´t clash
import { useRouter } from "next/router";

function FilteredSongs() {
    //connect to the url data encoded
    const router = useRouter();
    //access to the array of parameters
    const filterData = router.query.brick;
    
    if (!filterData) {//first load of the page
        return <p className="center">Loading...</p>;
    }
    //separet the string data in the array
    const filteredstudent = filterData[0];
    const filteredtask = filterData[1];
}

export default FilteredSongs;