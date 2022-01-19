window.onload = function()
{
    matrixPlusScalar();

    // matrixTimesScalar();

    // matrixPlusMatrix();

    // matrixTimesMatrix();
}


function matrixPlusScalar()
{
    writeToConsole("Add scalar to matrix<br />====================<br /><br />");

    const m1 = math.matrix([ [1,2,3],[4,5,6] ]);
    const m2 = math.add(m1, 7);

    printMatrix(m1);

    writeToConsole("<br />+ 7 =<br /><br />");

    printMatrix(m2);

    writeToConsole("<br />");
}


function matrixTimesScalar()
{
    writeToConsole("Multiply matrix by scalar<br />=========================<br /><br />");

    const m1 = math.matrix([ [1,2,3],[4,5,6] ]);
    const m2 = math.multiply(m1, 3);

    printMatrix(m1);

    writeToConsole("<br />* 3 =<br /><br />");

    printMatrix(m2);

    writeToConsole("<br />");
}


function matrixPlusMatrix()
{
    writeToConsole("Add two matrices<br />================<br /><br />");

    const m1 = math.matrix([ [1,2,3],[4,5,6] ]);
    const m2 = math.matrix([ [9,8,7],[6,5,4] ]);
    const m3 = math.add(m1, m2);

    printMatrix(m1);
    writeToConsole("<br />+<br /><br />");
    printMatrix(m2);
    writeToConsole("<br />=<br /><br />");
    printMatrix(m3);

    writeToConsole("<br />");
}


function matrixTimesMatrix()
{
    writeToConsole("Multiply two matrices<br />=====================<br /><br />");

    const m1 = math.matrix([ [1,2,3],[4,5,6] ]);
    const m2 = math.matrix([ [7,10],[8,11],[9,12] ]);
    const m3 = math.multiply(m1, m2);

    printMatrix(m1);
    writeToConsole("<br />*<br /><br />");
    printMatrix(m2);
    writeToConsole("<br />=<br /><br />");
    printMatrix(m3);

    writeToConsole("<br />");
}


function printMatrix(matrix)
{
    const brackets = {"top_left": "\u23A1",
                    "middle_left": "\u23A2",
                    "bottom_left": "\u23A3",
                    "top_right": "\u23A4",
                    "middle_right": "\u23A5",
                    "bottom_right": "\u23A6"};

    const sizes = math.size(matrix);
    const rows = math.subset(sizes, math.index(0));
    const columns = math.subset(sizes, math.index(1));

    for(let r = 0; r < rows; r++)
    {
        if(r == 0)
            writeToConsole(brackets.top_left);
        else if(r == (rows - 1))
            writeToConsole(brackets.bottom_left);
        else
            writeToConsole(brackets.middle_left);

        for(let c = 0; c < columns; c++)
        {
            writeToConsole((math.subset(matrix, math.index(r, c))).toString().padStart(4, " "));
        }

        if(r == 0)
            writeToConsole(brackets.top_right);
        else if(r == rows - 1)
            writeToConsole(brackets.bottom_right);
        else
            writeToConsole(brackets.middle_right);

        writeToConsole("<br />");
    }
}
