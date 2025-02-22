export const POST = () => {
    return new Response(JSON.stringify({ message: "Logged out successfully" }), {
      status: 200,
    });
  };
  