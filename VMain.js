coATB.App.Components.MainView = {
  Version        : new Version(2018,3,9,5),
  Title          : new Title("ATB MainView","Main"),
  Vendor         : new Vendor("Aurawin", "Copyright (&copy;) 2018.  All rights reserved.", [{'REAL-TIME END-USE AWARE INTERACTIVE SEARCH UTILIZING LAYERED APPROACH' : 7720843}, {'SYSTEMS AND APPARATUSES FOR SEAMLESS INTEGRATION OF USER, CONTEXTUAL, AND SOCIALLY AWARE SEARCH UTILIZING LAYERED APPROACH' : 7860852} ]),
  Header         : coAppKit.Dependencies.Create(coATB.App,'/atb/VMain.js',coAppKit.PreLoaded),
  debugToConsole : true,
  Create : function(Parent){
    var Screen = Parent.Screen;
    var v=Parent.Slides.createSlide(
      "MainView",
      Screen.Class+"MainView",
      Screen,
      Parent,
      Parent.Container,
      coAppUI.Alignment.Client
    );
    v.Unit=this;
    v.clearContainerClass();
    v.Visibile=true;
    v.setTransparent(true);
    v.setHeight(250);

    v.Showcase=coAppUI.App.Components.ShowCase.Create(
      "Showcase",
      v.Class,
      Screen,
      v.Slides,
      v,
      v.Container,
      coAppUI.Alignment.Client
    );
    v.Showcase.clearContainerClass();
    v.Showcase.setHeight(250);
    v.Showcase.Visible=true;


    v.Showcase.PageItemPosition=coAppUI.Absolute;
    v.Showcase.PageClientPosition=coAppUI.Relative;
    v.Showcase.PageContentPosition=coAppUI.Absolute;
    v.Showcase.Buttons.placeTopCenterInside();

    var sci=v.Showcase.Items.Face=v.Showcase.Items.addItem();
    sci.Category="Me";
    sci.Button.setCaption("Intro");
    sci.Image = coAppUI.App.Components.Image.Create(
      "Image",
      v.Class+"Image",
      Screen,
      sci.Page.Slides,
      sci.Page,
      sci.Page.Content,
      coAppUI.Alignment.Client
    );
    sci.Image.clearContainerClass();
    sci.Image.Visible=true;


    var sci=v.Showcase.Items.Blog=v.Showcase.Items.addItem();
    sci.Category="My Blog";
    sci.Button.setCaption("Blog");
    sci.Blog=coATB.App.Components.BlogView.Create(sci.Page);

    return v;
  }
};

