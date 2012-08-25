using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SignalR.Hubs;

namespace RealTimeApp.MessagesDemo
{
    [HubName("chat")]
    public class MessagesDemo : Hub
    {
        public void EnviarMensagem(string mensagem)
        {
            mensagem = "<em>" + DateTime.Now.ToString("HH:mm:ss") + "h</em> " + mensagem;

            //Chama um metodo implementado no cliente via JavaScritp
            Clients.adicionarMensagem(mensagem);
        }
    }
}