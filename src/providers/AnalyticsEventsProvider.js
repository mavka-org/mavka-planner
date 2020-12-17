import {TrackingContext, TrackingProvider} from '@vrbo/react-event-tracking';
import React, {useContext} from "react";
import SubjectProvider, {SubjectContext} from "./SubjectProvider";
import {UserContext} from "./UserProvider";
import {addAnalyticsEvent} from "../services/API/httpRequests";

//import {TrackingContext} from '@vrbo/react-event-tracking'
//const tracking = useContext(TrackingContext)

const AnalyticsEventsProvider = (props) => {

    const subject = useContext(SubjectContext)[0]
    const user = useContext(UserContext);
    const isTesting = true

    const defaultFields = {"subject_id":subject.id};
    const defaultOptions = {asynchronous: false};
    const customTrigger = (event_name, fields, options) => {


        addAnalyticsEvent(user, event_name, fields, isTesting).then(
            () => {
                // console.log("yayayayay this works thanks universe!!")
                // console.log("history ", fields.history)
                // console.log("fields ", fields)
                // console.log("options ", options)

                if (options.int_redirect) {
                    if (options.int_redirect.href && options.int_redirect.history) {
                        options.int_redirect.history.push(options.int_redirect.href)
                    } else {console.log("Event analytics error: tried to redirect to an internal link but didnt provide href or history")}
                }

                if (options.ext_redirect) {
                    if (options.ext_redirect.href) {
                        console.log("options.ext_redirect.href ", options.ext_redirect.href)
                        window.location.href = options.ext_redirect.href
                    } else {console.log("Event analytics error: tried to redirect to an external link but didnt provide href")}
                }


            }
        )

    }

    return (
        <TrackingProvider
            fields={defaultFields}
            options={defaultOptions}
            trigger={customTrigger}
        >
            {props.children}
        </TrackingProvider>
    );

}

export default AnalyticsEventsProvider;