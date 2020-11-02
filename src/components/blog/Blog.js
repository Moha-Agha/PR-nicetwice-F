import React, { useState } from "react";


const Blog = () => {

  const [online, setOnline] = useState(false)

  return (
    <>{online ? null :
      (
        <div className="container">
          <h1 style={{ marginTop: '100px' }}>
            Das Blog ist offline.<br />
      Wir werden bald zurück sein.
      </h1>
        </div>
      )
    }
    </>
  );

};

export default Blog;
