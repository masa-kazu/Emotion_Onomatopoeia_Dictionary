class Word{
    constructor(word, definition, pictureUrl){
        this.word = word;
        this.defintion = definition;
        this.pictureUrl = pictureUrl;
    }
}

class EmotionObject{
    constructor(emotion, description, color, onomatopoeia){
        this.emotion = emotion;
        this.description = description;
        this.color = color;
        this.onomatopoeia = onomatopoeia;
    }
    // 感情のすべての擬音語のWordオブジェクトの配列を返します
    getOnomatopoeiaWords(){
        let words = [];
        for (let i = 0; i < this.onomatopoeia.length; i++){
            let word = this.onomatopoeia[i];
            words[i] = new Word(word,dictionary[word],pictureDictionary[word]);
        }
        return words;
    }

    // コンテナのHTMLを文字列を返します。
    // このコンテナの背景は感情の色で、コンテナの上部には、感情と感情の説明が表示されています。
    // 次にこの感情の各擬音語とその定義、画像を含んだカードが表示されます。
    getHtmlContainerString(){
        let cards = this.getOnomatopoeiaWords();
        let onomatopoeiaContainer = 
        `
            <div id = "${this.emotion}" class = "container-fluid p-4 d-flex" style="background:${bgColors[this.color]}">
        <div class="row">
            <div id = "emotionHeding" class = "letter mx-3">
                <h2 class="ml-2">${this.emotion}</h2>
                <p>${this.description}</p>
            </div>
            <div class="container-fluid d-flex justify-content-md-around col-12 flex-wrap ">
        `;

        for (let i = 0; i < cards.length; i++) {
            let onomatope = cards[i];
            onomatopoeiaContainer += 
            `
                <div id = "onomatopeCon" class="bg-white col-5 d-flex align-items-center flex-wrap m-2">
                    <div id = "onomatopeLetter" class="col-6 pt-2">
                        <h4 class="ml-1">${onomatope.word}</h4>                    
                        <p>${onomatope.defintion}</p>
                    </div>
                    <div id = "onomatopeImage" class="col-6 pt-2">
                        <img src="${onomatope.pictureUrl}" class="box">
                    </div>  
                </div>
            `;
        }

        onomatopoeiaContainer += 
        `
                    </div>
                </div>
            </div>
        `;

        return onomatopoeiaContainer;
    }
}

//グローバル定数
const dictionary = {
    "bark":"the sound made by a dog",
    "grunt":"issue a low, animal-like noise",
    "roar":"make a loud noise, as of an animal",
    "whack":"the act of hitting vigorously",
    "smack":"a blow from a flat object (as an open hand)",
    "hiss":`make a sharp, elongated "s" sound`,
    "ahem":"the utterance of a sound similar to clearing the throat",
    "bawl":"cry loudly",
    "bling":"flashy, ostentatious jewelry",
    "boom":"a deep prolonged loud noise",
    "buzz":"the sound of rapid vibration",
    "caw":"utter a cry, characteristic of crows, rooks, or ravens",
    "chatter":"talk socially without exchanging too much information",
    "chant":"a repetitive song in which syllables are assigned to a tone",
    "clatter":"a continuous rattling sound as of hard objects falling or striking each other.",
    "clunk":"a heavy dull sound (as made by impact of heavy objects)",
    "crawl":"move forward on the hands and knees or by dragging the body close to the ground.",
    "flick":"throw or toss with a quick motion",
    "giggle":"a light, silly laugh.",
    "gargle":"an act or instance or the sound of washing one's mouth and throat with a liquid kept in motion by exhaling through it.",
    "honk":"the cry of a goose or any loud sound resembling it",
    "oink":"the short low gruff noise of the kind made by hogs",
    "whine":"a complaint uttered in a plaintive way",
    "waah":"sound made when crying by babies",
    "zing":"sound my by something energetic"
};

const pictureDictionary = {
    "bark":"https://cdn.pixabay.com/photo/2013/07/25/11/59/german-shepherd-166972_1280.jpg",
    "grunt":"https://cdn.pixabay.com/photo/2019/03/10/19/43/pig-4047086_960_720.jpg",
    "roar":"https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg",
    "whack":"https://cdn.pixabay.com/photo/2017/10/27/11/49/boxer-2894025_1280.jpg",
    "smack":"https://cdn.pixabay.com/photo/2015/03/20/19/38/hammer-682767_1280.jpg",
    "hiss":"https://cdn.pixabay.com/photo/2016/10/13/23/30/cat-1739091_1280.jpg",
    "ahem":"https://cdn.pixabay.com/photo/2014/03/13/10/12/man-286476_1280.jpg",
    "bawl":"https://cdn.pixabay.com/photo/2015/06/26/10/17/smiley-822365_960_720.jpg",
    "bling":"https://cdn.pixabay.com/photo/2017/12/30/13/37/happy-new-year-3050088_1280.jpg",
    "boom":"https://cdn.pixabay.com/photo/2016/04/12/21/17/explosion-1325471_1280.jpg",
    "buzz":"https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211_1280.jpg",
    "caw":"https://cdn.pixabay.com/photo/2017/02/16/11/13/bird-2071185_1280.jpg",
    "chatter":"https://cdn.pixabay.com/photo/2014/07/25/08/55/bar-401546_1280.jpg",
    "chant":"https://cdn.pixabay.com/photo/2020/01/04/01/34/theravada-buddhism-4739531_960_720.jpg",
    "clatter":"https://cdn.pixabay.com/photo/2020/02/06/19/01/clutter-4825256_1280.jpg",
    "clunk":"https://cdn.pixabay.com/photo/2017/01/10/03/06/steel-1968194_1280.jpg",
    "crawl":"https://media.istockphoto.com/photos/side-view-of-pretty-crawling-baby-girl-picture-id166108754?s=612x612",
    "flick":"https://cdn.pixabay.com/photo/2012/02/23/08/48/disgust-15793_1280.jpg",
    "giggle":"https://cdn.pixabay.com/photo/2017/08/07/15/18/people-2604850_1280.jpg",
    "gargle":"https://cdn.pixabay.com/photo/2017/04/03/16/32/girl-smoke-cigarette-2198839_1280.jpg",
    "honk":"https://cdn.pixabay.com/photo/2017/02/28/14/37/geese-2105918_1280.jpg",
    "oink":"https://cdn.pixabay.com/photo/2019/03/02/15/32/pig-4030013_1280.jpg",
    "whine":"https://cdn.pixabay.com/photo/2020/05/01/01/57/girl-5115192_960_720.jpg",
    "waah":"https://cdn.pixabay.com/photo/2017/01/18/02/18/emotions-1988745_1280.jpg",
    "zing":"https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg"
};

const emotions = [
    new EmotionObject("angry", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"]),
    new EmotionObject("happy", "feeling or showing pleasure or contentment.", "pink", ["bling","chatter","chant","giggle"]),
    new EmotionObject("surprised", "to feel mild astonishment or shock.", "yellow", ["boom","honk","zing"]),
    new EmotionObject("bad", "not such as to be hoped for or desired; unpleasant or unwelcome.", "black", ["ahem","clatter","clunk"]),
    new EmotionObject("sad", "feeling or showing sorrow; unhappy.", "blue", ["bawl","whine","waah"]),
    new EmotionObject("fearful", "feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"])
];

const bgColors = {
    "red":"#ff0000",
    "pink":"#F7C7D8",
    "blue":"#2f55de",
    "green":"#3ce336",
    "yellow":"#e3e036",
    "black":"#000000"
};
//画像を持ってくるときは、右クリックで画像のアドレスをコピーする
const emotionImages = {
    "angry":"https://cdn.pixabay.com/photo/2018/02/02/21/41/crazy-3126441__340.jpg",
    "happy":"https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881__340.jpg",
    "bad":"https://cdn.pixabay.com/photo/2017/03/27/15/21/man-2179358_960_720.jpg",
    "sad":"https://cdn.pixabay.com/photo/2017/01/06/19/49/woman-1958723_960_720.jpg",
    "surprised":"https://cdn.pixabay.com/photo/2016/11/02/00/37/bouquet-1790142_960_720.jpg",
    "fearful":"https://cdn.pixabay.com/photo/2016/09/06/02/46/eery-1648250_960_720.jpg"
}

//実装
let htmlString =
`
<div id = "dCon" class = "container-fluid p-4 bg-dark d-flex">
    <div id="dRow" class="row">
        <h1 class="col-8 letter">Category</h1>
        <div id = "dEmotions" class = "d-flex justify-content-center flex-wrap">
`;

for (let i = 0; i < emotions.length; i++){
    let currEmotion = emotions[i];
    htmlString +=
    `
            <div class="col-3 text-center m-2" style="background: ${bgColors[currEmotion.color]};">
                <h4><a href="#${currEmotion.emotion}" class="letter">${currEmotion.emotion}</a></h4>
                <img src="${emotionImages[currEmotion.emotion]}" class="box">
            </div> 
    `
}

htmlString += 
`
        </div>
    </div>    
</div>
`;

document.getElementById("target").innerHTML = htmlString;

for(let i = 0; i < emotions.length; i++){
    document.getElementById("target").innerHTML += emotions[i].getHtmlContainerString();
}

console.log(document.getElementById("target"));