const category = document.getElementById("cat");
const list = document.getElementById("quotes");
const submit = document.getElementById("submit");
const searchForm = document.getElementById("form");

let getcat = null;
let myLi = document.createElement("LI")

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    getcat = category.value;
    console.log(getcat)
    const getq = await search(getcat);
    let myLi = document.createElement("LI")
    myLi.innerText = getq[0].quote + " by " + getq[0].author;
    list.append(myLi)
    i++;
})

const search = async (v) => {
    try{
    let resp = await axios.request({
        method: "GET",
        url: "https://andruxnet-random-famous-quotes.p.rapidapi.com/",
        params: { cat: v},
        headers: {
          "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
          "x-rapidapi-key": "4073fea9f6mshf06574363cc0648p1d54f5jsn669aab4abae2"
        }
      })
    return resp.data;
    }
    catch(e){
        alert("OH NO! Not Found!")
        return 0;
    }
}