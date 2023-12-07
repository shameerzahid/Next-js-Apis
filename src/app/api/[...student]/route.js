export async function GET(request,response) {
    console.log(response.params.student)
    return new Response("ALL routes handled")
}