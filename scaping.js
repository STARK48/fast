const { AuthenticationError, UserInputError } = require('apollo-server');
const test =require('../../scraping/scraping');
const keyWord = require('../../scraping/makeSearchTerm');
//const tsisy_heure =require('../../scraping/tsisy_heure');
const puppeteer = require('puppeteer');

const Task =require('../../models/Task');
const checkAuth = require('../../util/check-auth');


const toto =[];


var boutique = {}





    const navigation = async (page,keyword) => {    
        await page.type(".tactile-searchbox-input",keyword);
        await page.keyboard.press("Enter");
        await page.waitForTimeout(4000);    
        //await page.click("div[class='iRxY3GoUYUY__taparea']>button")
    
        try {
          boutique.Nom= await page.evaluate(
            ()=>{
              return document.querySelector("h1[class='section-hero-header-title-title gm2-headline-5']>span").innerText
            }
          );
    
        } catch (error) {
          boutique.Nom="";
        }
    
        try {
    
          boutique.Note = await page.evaluate(
            ()=>{
              return document.querySelector("span[class='aMPvhf-fI6EEc-display']").innerText
            }
          );
        } catch (error) {
          boutique.Note ="";
        }
    
    
        try {
          boutique.Avis = await page.evaluate(
            ()=>{
              return document.querySelector("button[class='widget-pane-link']").innerText
            }
          );
    
        } catch (error) {
          boutique.Avis="";
        }
    
    
        try {
    
          boutique.Apropos = await page.evaluate(
            ()=>{
              return document.querySelector("[class='section-editorial-quote']>span").innerText 
            }
          );
        } catch (error) {
          boutique.Apropos="";
        }
    
    
    
        try {
          boutique.Telephone = await page.evaluate(
            ()=>{
              return document.querySelector("[data-tooltip='Copier le numéro de téléphone']").innerText
            }
          );
    
        } catch (error) {
          boutique.Telephone="";
        }
    
    
        try {
          boutique.Adresse = await page.evaluate(
            ()=>{
              return document.querySelector("[class='QSFF4-text gm2-body-2']").innerText
            }
          );
    
        } catch (error) {
          boutique.Adresse="";
        }
    
        try {
          boutique.Siteweb = await page.evaluate(
            ()=>{
              return document.querySelector("[data-item-id='authority']").innerText
            }
          );
    
        } catch (error) {
          boutique.Siteweb ="";
        }
    
        try {
          boutique.PlusCode = await page.evaluate(
            ()=>{
              return document.querySelector("[data-item-id='oloc']").innerText
            }
          );
    
        } catch (error) {
          boutique.PlusCode="";
        }
    
    
    
        
    
     return boutique;
        //await browser.close()
    
    
    }


    const navigation3 = async (page,keyword) => {    
      await page.type("input#searchboxinput.tactile-searchbox-input",keyword);
       await page.keyboard.press("Enter");
      await page.waitForTimeout(4000);    
      //await page.click("div[class='iRxY3GoUYUY__taparea']>button")
  
  
      try {
          const close_button = await page.waitForSelector("button[jsaction='pane.placeActions.share']");
          close_button.click();
      } catch (error) {
        
      }
  
      
  
      await page.waitForTimeout(4000);
  
      
      boutique.Nom = keyword;
  
        
      
      try {
          boutique.Gmb = await page.evaluate(()=>{
            return document.querySelector("input[class='section-copy-link-input']").getAttribute('value');
            }
         );
  
        } catch (error) {
          boutique.Gmb="";
        }
  
   return boutique;
      //await browser.close()
  
  
  }







  const navigation4 = async (page,url) => {  
    
    await page.goto(url);
    await page.waitForTimeout(1000)
    

    try {
      const accepte = await page.waitForSelector("button[jsname='higCR']");

    if (accepte) {
        accepte.click();
        await page.waitForTimeout(5000);
    }
    } catch (error) {
      
    } 

    try {
      boutique.Nom= await page.evaluate(
        ()=>{
          return document.querySelector("h1[class='section-hero-header-title-title gm2-headline-5']>span").innerText
        }
      );

    } catch (error) {
      boutique.Nom="";
    }

    try {

      boutique.Note = await page.evaluate(
        ()=>{
          return document.querySelector("span[class='aMPvhf-fI6EEc-display']").innerText
        }
      );
    } catch (error) {
      boutique.Note ="";
    }


    try {
      boutique.Avis = await page.evaluate(
        ()=>{
          return document.querySelector("button[class='widget-pane-link']").innerText
        }
      );

    } catch (error) {
      boutique.Avis="";
    }


    try {

      boutique.Apropos = await page.evaluate(
        ()=>{
          return document.querySelector("[class='section-editorial-quote']>span").innerText 
        }
      );
    } catch (error) {
      boutique.Apropos="";
    }



    try {
      boutique.Telephone = await page.evaluate(
        ()=>{
          return document.querySelector("[data-tooltip='Copier le numéro de téléphone']").innerText
        }
      );

    } catch (error) {
      boutique.Telephone="";
    }


    try {
      boutique.Adresse = await page.evaluate(
        ()=>{
          return document.querySelector("[class='QSFF4-text gm2-body-2']").innerText
        }
      );

    } catch (error) {
      boutique.Adresse="";
    }

    try {
      boutique.Siteweb = await page.evaluate(
        ()=>{
          return document.querySelector("[data-item-id='authority']").innerText
        }
      );

    } catch (error) {
      boutique.Siteweb ="";
    }

    try {
      boutique.PlusCode = await page.evaluate(
        ()=>{
          return document.querySelector("[data-item-id='oloc']").innerText
        }
      );

    } catch (error) {
      boutique.PlusCode="";
    }



    //const partager = await page.waitForSelector("button[data-value='Partager']");
    // const heure = await page.waitForSelector(".cX2WmPgCkHi__section-info-hour-text");
    // await page.waitForTimeout(3000);
    
    // await heure.click();




    // boutique.Ouverture = await page.evaluate(() => {

    //   //var finalRes = [];
    //   var finalRes = {};
    //   const jour = Array.from(document.querySelectorAll(".lo7U087hsMA__row-header"))
    //   const heure = Array.from(document.querySelectorAll(".lo7U087hsMA__row-interval"))
    //   //jour=jour.map(td => td.innerText)
    //   //heure=heure.map(td => td.innerText)

    //   const days = [];
    //   jour.forEach( c => days.push(c.innerText));

    //   const hour = [];
    //   heure.forEach( c => hour.push(c.innerText));


    //   // for (var l=0; l<days.length; l++) {
    //   //   var res = {};
    //   //   for(var x=0; x<hour.length; x++) {
    //   //   var i = hour[x]; //i is the index value..          
    //   //   res[i] = days[l][i];
    //   //   }
        
    //   //    finalRes[l] = res;
         
    //   //   }


    //   for (var l=0; l<days.length; l++) {
    //     //var res = {};
    //     for(var x=0; x<hour.length; x++) {
    //     //var i = hour[x]; //i is the index value..          
    //     //res[i] = days[l][i];
    //     //res[days[l]] = hour[l];
    //     finalRes[days[l]] = hour[l];
    //     }
        
    //      //finalRes[l] = res;
         
         
    //     }

    //     return finalRes



    //   //const tds = Array.from(document.querySelectorAll('tr td'))
    //   //return tds
    //   //return tds.map(td => td.innerText)
      






    // });

    



    // await page.waitForTimeout(4000);
    
    // await partager.click();
    // //await page.click(".cX2WmPgCkHi__section-info-hour-text")
    // await page.waitForTimeout(4000);
    // //boutique.Nom = keyword;

    // try {
    //     boutique.Gmb = await page.evaluate(()=>{
    //       return document.querySelector("[class='section-copy-link-input-container']>input").getAttribute('value');
    //       }
    //    );

    //   } catch (error) {
    //     console.log("GMB not found")
    //   }
      

      // try {

      //   heure =await page.evaluate(()=>{
      //     return document.querySelector("span[class='cX2WmPgCkHi__section-info-hour-text']");
      //     })
      //     if (heure.length()=!0) {
      //       boutique.heure = 'heure misy';
      //       await page.click(".cX2WmPgCkHi__section-info-hour-text")
      //     }
      //     else{
      //       boutique.heure = 'heure tsisy';
      //     }
      //   await page.click(".cX2WmPgCkHi__section-info-hour-text")
      // } catch (error) {
      //   console.log("heure not found")
      // }

 return boutique;
    //await browser.close()


}

  
  
    
    
    
    
    url='https://www.google.com/maps/';
    //keyword='pandora 81 rue de la république, 69002, lyon france';




module.exports ={
    Query: {
        async getBoutique(){
            tableau = keyWord.term(echantillon);            
            console.log(test.boutique);
            return test.srcape(tableau);
            
            

        },
        
    },
    Mutation:{
        async runScraping(_,context){
            

            //const user = checkAuth(context);
            if (user) {

                
    
                const miverina = async (page,compteur)=>{
                    //const close_button = await page.waitForSelector("button[class='close-button close-button-white-circle']")
                    //await page.waitForTimeout(2000)
                    const clear_button = await page.waitForSelector("a[tooltip='Effacer la recherche']")
                    // if (close_button!=null) {
                    //   await close_button.click();
                    // }   
                    
                    await clear_button.click();
                    //console.log(compteur) 
                
                     compteur++
                    if (compteur<tableau.length) {
                        navigation(page,tableau[compteur]).then(value=>{
                            console.log(value);
                            console.log(context);
                            miverina(page,compteur)
                            
                                   
                        })
                    }
                  }

                   const srcape = async () => {
                    const browser = await puppeteer.launch({headless:true})
                    //await page.setViewport({ width:1920, height:1080 })
                    const page = await browser.newPage()    
                    await page.goto(url);
                    await page.waitForTimeout(5000)
                    compteur = 0;
                    navigation(page,tableau[compteur],context).then(value=>{
                        console.log(value);
                        // context.pubsub.publish('NEW_RESULTAT', {
                        //     newResultat: value
                        //   });  
                            
                        
                        
                        miverina(page,compteur) 
                               
                    })
                
                }
                  //srcape();

                  return srcape;
                
            }
            

        },
        async createTask2(_,{title,module,comment,website,result},context){
          //console.log(context);
          console.log(result);
          const user = checkAuth(context);
      
          
            const newTask = new Task({
                title,
                module,
                comment,
                website,
                user:user.id,
                username:user.username,
                createdAt: new Date().toISOString()
                
            })

          if (user) {

                
    
            const miverina = async (page,compteur)=>{
                //const close_button = await page.waitForSelector("button[class='close-button close-button-white-circle']")
                //await page.waitForTimeout(2000)
                const clear_button = await page.waitForSelector("a[tooltip='Effacer la recherche']")
                // if (close_button!=null) {
                //   await close_button.click();
                // }   
                mimi =[];
                await clear_button.click();
                //console.log(compteur) 
            
                 compteur++
                if (compteur<result.length) {
                    navigation(page,result[compteur]).then(value=>{
                        console.log(value);
                        //toto.push(value);
                        context.pubsub.publish('NEW_RESULTAT', {
                          newResultat: value
                        }); 
                        miverina(page,compteur)
                        
                               
                    })
                }
              }

               const srcape = async () => {
                const browser = await puppeteer.launch({headless:false})
                //await page.setViewport({ width:1920, height:1080 })
                const page = await browser.newPage()    
                await page.goto(url);
                await page.waitForTimeout(2000);
                try {
                  const accepte = await page.waitForSelector("button[jsname='higCR']");
            
                if (accepte) {
                    accepte.click();
                    await page.waitForTimeout(5000);
                }
                } catch (error) {
                  
                } 
                compteur = 0;
                navigation(page,result[compteur],context).then(value=>{
                    
                    //toto.push(value);
                    console.log(value);
                    context.pubsub.publish('NEW_RESULTAT', {
                        newResultat: value
                      });  
                        
                    
                    
                    miverina(page,compteur) 
                           
                })
            
            }
              srcape();

              
            
        }
      
          
      
          // context.pubsub.publish('NEW_POST', {
          //   newPost: post
          // });
          const task = await newTask.save();
          return task;
        },

        async createTask3(_,{title,module,comment,website,result},context){
          //console.log(context);
          console.log(result);
          //console.log(data);
          const user = checkAuth(context);
      
          
            const newTask = new Task({
                title,
                module,
                comment,
                website,
                user:user.id,
                username:user.username,
                createdAt: new Date().toISOString()
                
            })

          if (user) {

                
    
            const miverina = async (page,compteur)=>{
    
              const close_button = await page.waitForSelector("button[jsaction='modal.close']");
              if (close_button!=null) {
                close_button.click();
             }   
              await page.waitForTimeout(2000);
              const clear_button = await page.waitForSelector("span[id='sb_cb50']");      
              await clear_button.click();
              //console.log(compteur) 
          
               compteur++
              if (compteur<result.length) {
                  navigation3(page,result[compteur]).then(value=>{
                      console.log(value);
                      context.pubsub.publish('NEW_GMB_LINK', {
                        newGmbLink: value
                      });
                      miverina(page,compteur)
                      
                             
                  })
              }
            }

            const srcape = async () => {
              const browser = await puppeteer.launch({headless:false});
              const page = await browser.newPage()    
              await page.goto(url);
              await page.waitForTimeout(2000);
              try {
                const accepte = await page.waitForSelector("button[jsname='higCR']");
          
              if (accepte) {
                  accepte.click();
                  await page.waitForTimeout(5000);
              }
              } catch (error) {
                
              } 
              compteur = 0;
              navigation3(page,result[compteur]).then(value=>{
                  console.log(value);
                  context.pubsub.publish('NEW_GMB_LINK', {
                    newGmbLink: value
                  });
                  miverina(page,compteur) 
                         
              })
          
          }
              srcape();

              
            
        }
      
          
      
          // context.pubsub.publish('NEW_POST', {
          //   newPost: post
          // });
          const task = await newTask.save();
          return task;
        },

        async createTask4(_,{title,module,comment,website,result},context){
          //console.log(context);
          console.log(result);
          const user = checkAuth(context);
      
          
            const newTask = new Task({
                title,
                module,
                comment,
                website,
                user:user.id,
                username:user.username,
                createdAt: new Date().toISOString()
                
            })

          if (user) {

                
    
            const miverina = async (page,compteur)=>{
              //const close_button = await page.waitForSelector("button[class='close-button close-button-white-circle']")
              //await page.waitForTimeout(2000)
              // const clear_button = await page.waitForSelector("a[tooltip='Effacer la recherche']")
              // if (close_button!=null) {
              //   await close_button.click();
              // }   
              
              // await clear_button.click();
              //console.log(compteur) 
          
               compteur++
              if (compteur<result.length) {
                  navigation4(page,result[compteur]).then(value=>{
                      console.log(value);
                      context.pubsub.publish('NEW_DATA', {
                        newData: value
                      });
                      miverina(page,compteur)
                      
                             
                  })
              }
            }

            const srcape = async () => {
              const browser = await puppeteer.launch({headless:false})
              //await page.setViewport({ width:1920, height:1080 })
              const page = await browser.newPage()    
              
              compteur = 0;
              navigation4(page,result[compteur]).then(value=>{
                  console.log(value);
                  context.pubsub.publish('NEW_DATA', {
                    newData: value
                  });
                  miverina(page,compteur) 
                         
              })
          
          }
              srcape();

              
            
        }
      
          
      
          // context.pubsub.publish('NEW_POST', {
          //   newPost: post
          // });
          const task = await newTask.save();
          return task;
        }
    }, 
    Subscription: {
        newResultat: {
          subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_RESULTAT')
        },
        newGmbLink: {
          subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_GMB_LINK')
        },
        newData: {
          subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_DATA')
        }
      }
}