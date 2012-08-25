using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SignalR.Hubs;
using System.Threading;

namespace RealTimeApp.Games
{
    [HubName("game")]
    public class GameHub : Hub
    {
        public void sendAction(string action, string min, string events)
        {
            string classCss="";
            string msg = "";
            if (events.Equals("golo"))
            {
                classCss = "alert alert-success";
                msg = "<strong>Gooollloo: Minuto: " + min + "</strong>: " + action;
            }
            if (events.Equals("vermelho"))
            {
                classCss = "alert alert-error";
                msg = "<strong>Vermelho: Minuto: " + min + "</strong>: " + action;
            }
            if(events.Length==0)
            {
                classCss = "alert alert-info";
                msg = "<strong>Minuto: " + min + "</strong>: " + action;
            }
            Clients.putGameAction("<div class='"+classCss+"'>"+msg+"</div>");
        }

        public void EnviarMensagem(string mensagem)
        {
            mensagem = "<em>" + DateTime.Now.ToString("HH:mm:ss") + "h</em> " + mensagem;

            //Chama um metodo implementado no cliente via JavaScritp
            Clients.adicionarMensagem(mensagem);
        }

        public void StartGame(string id)
        {
            int min = 0;

            while (min < 45)
            {
                int sec = 0;
                while (sec < 60)
                {
                    Thread.Sleep(1000);
                    
                    string secDesc = sec.ToString();
                    string minDesc = min.ToString();

                    if (min < 10)
                        minDesc = "0" + minDesc;
                    if(sec < 10)
                        secDesc = "0" + secDesc;

                    Clients.setTime(minDesc, secDesc);
                    sec++;
                }
                min++;
            }
        }
    }
}