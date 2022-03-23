/*Write a program that creates a string representing an 8x8 grid, using new-line characters to seperate lines.
 At each position of the grid there is either a space or a # Character. The characters should for a chessboard.
 output should look like */
// console.log(" # # # #\n# # # # \n # # # # \n# # # # ");
function chessboard(size){
    board = "";
    for (let height = 0; height < size; height++){
        for (let width = 0; width < size; width++){
            if (height % 2 === 0){
                board += "# "
            } else {
                board += " #"
            };
            
        };
        board += '\n';
    };
    console.log(board);
};
// running at O(n^2) due to embedded loop;

// chessboard(4);
// chessboard(7);
// chessboard(10);