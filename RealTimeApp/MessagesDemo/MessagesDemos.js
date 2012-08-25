/// <reference path="../Scripts/jquery-1.6.4.js" />
/// <reference path="../Scripts/jquery.signalR-0.5.2.js" />

$(function () {
        // Cria um proxy da nossa classe Chat do Servidor
        var chat = $.connection.chat;
 
        // Declare a function on the chat hub so the server can invoke it
        chat.adicionarMensagem = function (message) {
            $('#mensagens').append('<li>' + message + '</li>');
        };
 
        $("#btnEnviar").click(function () {
            // Chama o metodo da classe Chat do servidor
            chat.enviarMensagem($('#msg').val());
        });
 
        // Inicia a conexão
        $.connection.hub.start();
 });