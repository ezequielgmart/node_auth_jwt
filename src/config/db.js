// Configuration for the DB conection
import dbLocal from "db-local";

const { Schema } = new dbLocal({ path: './db'});

// Export Schema as a named export
export { Schema };