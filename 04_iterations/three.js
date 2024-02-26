const coding = ["js", "cpp", "java", "javascript", "python"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "python",
        languagefilename: "py"
    },
    {
        languagename: "java",
        languagefilename: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagename);
} )