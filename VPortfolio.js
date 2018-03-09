coATB.App.Components.PortfolioView = {
  Version        : new Version(2018,3,8,0),
  Title          : new Title("ATB PortfolioView","Portfolio"),
  Vendor         : new Vendor("Aurawin", "Copyright (&copy;) 2018.  All rights reserved.", [{'REAL-TIME END-USE AWARE INTERACTIVE SEARCH UTILIZING LAYERED APPROACH' : 7720843}, {'SYSTEMS AND APPARATUSES FOR SEAMLESS INTEGRATION OF USER, CONTEXTUAL, AND SOCIALLY AWARE SEARCH UTILIZING LAYERED APPROACH' : 7860852} ]),
  Header         : coAppKit.Dependencies.Create(coATB.App,'/atb/VPortfolio.js',coAppKit.PreLoaded),
  debugToConsole : true,
  glyphDelayWide   : 10000,
  glyphDelaySquare1: 11000,
  glyphDelaySquare2: 12000,
  Create : function(Parent){
    var Screen = Parent.Screen;
    var v=Parent.Slides.createSlide(
      "PortfolioView",
      Screen.Class+"PortfolioView",
      Screen,
      Parent,
      Parent.Container,
      coAppUI.Alignment.Client
    );
    v.Unit=this;
    v.clearContainerClass();
    v.Visibile=true;
    v.setTransparent(true);

    v.Slides.Elements=coAppUI.App.Components.Elements.Create(
        "Elements",
        "elmsPortfolio",
        Screen,
        v.Slides,
        v,
        v.Container,
        coAppUI.Alignment.Client
    );

    v.Slides.Elements.Single=v.Slides.Elements.Items.Add(coAppUI.App.Components.Elements.Kind.Single);
    var el=v.Slides.Elements.Single.subItems[0];
    el.Glyphs.Delay=this.glyphDelayWide;
    return v;
  }
};

