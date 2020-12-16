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

    const defaultFields = {"subject_id": subject.id, "user": user, "isTesting": isTesting};
    const defaultOptions = {asynchronous: true};
    const customTrigger = (event, fields, options) => {

        let event_params = fields
        addAnalyticsEvent(user, event, event_params, defaultFields.isTesting).then(
            () => {
                console.log("yayayayay this works thanks universe!!")
                console.log("history ", fields.history)
                console.log("fields ", fields)
                console.log("options ", options)

                if (fields.int_href && fields.history) {
                    fields.history.push(fields.int_href)
                }
                if (fields.ext_href){
                    window.location.href = fields.ext_href
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