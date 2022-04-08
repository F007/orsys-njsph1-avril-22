import assert from "assert";
import { WebServer } from "../WebServer";
import axios from "axios";
import { count } from "console";

describe("Server", function () {
  it("should start and stop", async () => {
    process.env.PORT = "3000";
    const server = new WebServer();
    await server.start();
    await server.stop();
    //const result = await axios.get("http://localhost:3232/api/datte");
    //console.log(result.data);
    //assert.ok(result.data.date);
  });
});
