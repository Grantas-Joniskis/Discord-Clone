/**
 * The databag is used to share data between middleware and controllers.
 * It's share during all the lifecycle of the request.
 * Example: A middleware get the user from the database and store it in the databag.
 * The controller could retrieve the user from the databag.
 */
class DataBag {
    [key:string]: any;
}

export default DataBag;