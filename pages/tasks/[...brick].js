//or [...slug].js
//All routes, as long as we enter more than one dynamic parameter after /tasks, [].js won´t clash
import { useRouter } from "next/router";
import TaskList from '../../components/tasks/taskList';
import { Fragment } from "react";
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/errorAlert';

function FilteredTaskPage() {
    //connect to the url data encoded
    const router = useRouter();
    //access to the array of parameters
    const filterData = router.query.brick;
    
    if (!filterData) {//first load of the page
        return <p className="center">Loading...</p>;
    }
    //separet the string data in the array
    const filteredParameter = filterYear[0];
    //transforming to numbers
    const numYear = +filteredParameter;
    //validación, if is not number(isNaN) or ... then:
    if (
        isNaN(numYear) || 
        isNaN(numMonth) ||
        numYear > 2030 ||
        numMonth < 1 ||
        numMonth > 12
        ) {
        return(
            <Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your filters</p>
                </ErrorAlert>
                <div>
                    <Button link='/tasks'>Show All Tasks</Button>
                </div>
            </Fragment>
        ) 
    }//ahora tenemos datos válidos con los cuales trabajar

    //we can have a function of filtering de tasks by the given parameters as getFilteredEvents in dummy-data
    const filteredEvents = getFilteredEvents({
        //send them to the filter function and save the docs got in 'filteredDocs'
        year: numYear,
        month: numMonth,
    });

    //validación, si está vacío
    if (!filterEvents || filteredEvents.length === 0) {
        return(
            <Fragment>
                <ErrorAlert>
                    <p>No tasks found for the chosen filter!</p>
                </ErrorAlert>
                <div>
                    <Button link='/tasks'>Show All Tasks</Button>
                </div>
            </Fragment>
        )
    }

    
    
    return(
        <div>
            <h1>Filtered Tasks in {} </h1>
            <Button link='/tasks'>Show all tasks</Button>
            {/* TaskList has the format to show my tasks */}
            {/* everything depends on how and what data I wanna show */}
            <TaskList items={filteredEvents} />
        </div>
    )
}

export default FilteredTaskPage;