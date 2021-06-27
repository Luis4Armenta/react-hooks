import React, { memo } from 'react'

export const Small = memo(({ value }) => {
  console.log('Me volví a llamar.. :<');
  return (
    <small> { value } </small>
  );
});
// export const Small = React.memo(({ value }) => {
//   console.log('Me volví a llamar.. :<');
//   return (
//     <small> { value } </small>
//   );
// });
