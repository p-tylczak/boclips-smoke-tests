import request from "request-promise-native";

export async function generateToken(username, password) {
  const response = await request({
    method: "POST",
    uri: "https://api.boclips.com/v1/token",
    form: `grant_type=password&username=${username}&password=${password}&client_id=teachers`
  });

  return JSON.parse(response).access_token;
}
