// Bad code
{
  p = {
      get name(){
          // no returns.
      }
  };

  Object.defineProperty(p, "age", {
      get: function (){
          // no returns.
      }
  });

  class P{
      get name(){
          // no returns.
      }
  }
}

// Good code
{
  p = {
      get name(){
          return "nicholas";
      }
  };

  Object.defineProperty(p, "age", {
      get: function (){
          return 18;
      }
  });

  class P{
      get name(){
          return "nicholas";
      }
  }
 }
