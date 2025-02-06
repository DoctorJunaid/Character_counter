
{
    const counter = document.getElementsByClassName("counter");
    const textArea = document.getElementById("text");
    textArea.addEventListener("input", function () {
        counter[0].innerText = this.value.length;
    });
}
{
    const counter = document.getElementsByClassName("counter2");
    const textArea = document.getElementById("text");

    textArea.addEventListener("input", function () {
        const words = this.value.trim().split(/\s+/).filter(word => word.length > 0);
        counter[0].innerText = words.length;
    })
}
{
    const counter = document.getElementsByClassName("counter3");
    const textArea = document.getElementById("text");
    textArea.addEventListener("input", function () {
        const sentences = this.value.trim().split(/[.!?]+/).filter(sentence => sentence.length > 0);
        counter[0].innerText = sentences.length;
    })
}