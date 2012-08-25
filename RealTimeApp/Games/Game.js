/// <reference path="../Scripts/jquery-1.6.4.js" />
/// <reference path="../Scripts/jquery.signalR-0.5.2.js" />

$(function () {
    // Cria um proxy da nossa classe Chat do Servidor
    var game = $.connection.game;

    // Declare a function on the chat hub so the server can invoke it
    game.putGameAction = function (message) {
        $('#messages').append('<li>' + message + '</li>');
    };


    $("#btnAction").click(function () {
        // Chama o metodo da classe Chat do servidor
        game.sendAction($('#action').val(), $('#min').val(), $('#events').val());
    });

    // Declare a function on the chat hub so the server can invoke it
    game.adicionarMensagem = function (message) {
        $('#mensagens').append('<li>' + message + '</li>');
    };

    $("#btnEnviar").click(function () {
        // Chama o metodo da classe Chat do servidor
        game.enviarMensagem($('#msg').val());
    });


    $("#btnStart").click(function () {
        // Chama o metodo da classe Chat do servidor
        console.log(game);
        game.startGame("1");
    });


    game.setTime = function (min, sec) {
        $('#min').html(min);
        $('#sec').html(sec);
    }

    // Inicia a conexão
    $.connection.hub.start();
});