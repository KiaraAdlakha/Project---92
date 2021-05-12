function add_user()
{
    player1_name=document.getElementById("player_name1").value;
player2_name=document.getElementById("player_name2").value;
console.log("Player 1  name is"+player1_name);
    console.log("Player 2 name is"+player2_name);
    localStorage.setItem("Player1Name", player1_name);
    localStorage.setItem("Player2Name", player2_name);
    window.location="game_page.html";
}