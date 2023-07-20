const request = require("supertest");
const app = require(".");

const error = (err) => {
  if (err) throw err;
};

it("returns colors", async () => {
  const response = await request(app).get("/api/colors");

  expect(response.headers["content-type"]).toEqual(
    expect.stringContaining("json")
  );
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual(["black", "blue", "green", "red", "white"]);
});

it("returns 404 when trying to GET the submit endpoint", async () => {
  const response = await request(app).get("/api/submit");

  expect(response.statusCode).toBe(404);
});

it("submits the user information", async () => {
  const response = await request(app).post("/api/submit").send({
    name: "Foo",
    password: "foo",
    email: "foo@bar.ca",
    color: "blue",
    terms: true,
  });

  expect(response.statusCode).toBe(200);
});

it("returns 400 when submitting Error as the name", async () => {
  const response = await request(app).post("/api/submit").send({
    name: "Error",
    password: "foo",
    email: "foo@bar.ca",
    color: "blue",
    terms: true,
  });

  expect(response.statusCode).toBe(400);
});

it("returns 400 when submitting with missing fields", async () => {
  const response = await request(app).post("/api/submit").send({
    name: "Error",
    email: "foo@bar.ca",
    color: "blue",
    terms: true,
  });

  expect(response.statusCode).toBe(400);
});

it("returns 400 when submitting with an empty field", async () => {
  const response = await request(app).post("/api/submit").send({
    name: "",
    email: "foo@bar.ca",
    color: "blue",
    terms: true,
  });

  expect(response.statusCode).toBe(400);
});
