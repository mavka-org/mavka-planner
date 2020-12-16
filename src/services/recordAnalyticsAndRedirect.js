// import {addAnalyticsEvent} from "./API/httpRequests"
// import {useContext} from "react";
// import {UserContext} from "../providers/UserProvider";
//
//
//
// export const recordAnalyticsAndRedirect = (event_name, event_params, href=undefined) => {
//     const user = useContext(UserContext)
//     const history = useHistory();
//
//     addAnalyticsEvent(user, event_name, event_params).then(
//         () => {
//             // if href was passed
//             if (href) {
//                 // if the link is external
//                 if (href.includes("http")) {
//                     console.log("inside external href ", href)
//                     window.location.href=href
//                 }
//                 // if the link is internal
//                 else {
//                     console.log("inside internal href ", href)
//                     history.push(href)
//                 }
//             }
//         }
//     )
// }