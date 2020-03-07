// create matrix from embedded array and assign to var A
let A = [
    [8,3,9],
    [2,0,7],
    [1,9,3],
  ]
  
  // create matrix from embedded array and assign to var B
  var B = [
    [4,1,2],
    [1,5,3],
    [1,7,2],
  ]
  var result = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ]
  document.write("<table border=\"l\">")
  for (let i = 0; i < 3; i++) {
      document.write("<tr>")
      for (let j = 0; j < 3; j++) {
          
          for (let k = 0; k < 3; k++) {
              result[i][j] += A[i][k] * B[k][j];
              document.write(result[i][j]);
              document.write("</td>")
          }
          document.write("<tr>")
      }
      
  }
  document.write("<table>")