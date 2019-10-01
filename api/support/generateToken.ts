import request from "request-promise-native";

export async function generateToken() {
  const response = await request({
    method: "POST",
    uri: "https://api.boclips.com/v1/token",
    form: `grant_type=password&username=${process.env.TEACHERS_USERNAME}&password=${process.env.TEACHERS_PASSWORD}&client_id=teachers`
  });

  return JSON.parse(response).access_token;
}
