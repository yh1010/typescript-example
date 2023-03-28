// 应用场景:
// 1.封装框架/工具库可以使用never

function handleMessage(message: string | number) {
  switch (typeof message) {
    case "string":
      console.log(message.length);

      break;
    case "number":
      console.log(message);
      break;
    default:
      const check: never = message;
  }
}

handleMessage(123);
handleMessage("457");
