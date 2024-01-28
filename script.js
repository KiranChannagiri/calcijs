let display = document.querySelector("#display")
// .value: This part accesses the value property of the selected input element. The value property is used to get or set the current content of a text input
function appendToDisplay(input)
{
    display.value = display.value + input;
};
function clearDisplay() 
{
    display.value = "";
}
function calculate()
{
    display.value =  eval(display.value);
}