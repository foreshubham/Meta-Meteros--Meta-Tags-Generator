import { Component ,ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-all-meta-tags',
  templateUrl: './all-meta-tags.component.html',
  styleUrls: ['./all-meta-tags.component.css']
})
export class AllMetaTagsComponent {
 
 
  currentContent: { html: string, styles: {} };

  constructor() {
    // Set the initial content
    this.currentContent = this.getHtmlContent('set1');
  }

  getHtmlContent(set: string): { html: string, styles: {} } {
    // Define different sets of HTML content and styles
    const contentSets: { [key: string]: { html: string, styles: {} } } = {
      set1: {
        html: `
          <h1>Basic HTML Meta Tags</h1>
          <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text">="undefined"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text">="undefined"</span>
          <span class="red-text">/&gt;</span>
        </p>
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text">="keywords"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text">="your, tags"</span>
          <span class="red-text">/&gt;</span>
        </p>
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="description"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="description"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="subject"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="your website subject"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="copyright"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="company name"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="language"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="ES"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="robots"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="index,follow"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="revised"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="Sunday, July 18th, 2010, 5:15 pm"</span>
          <span class="red-text">/&gt;</span>
        </p>
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="abstract"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> =""</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="topic"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> =""</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="summary"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> =""</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="Classification"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="Business"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="author"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="name, email@hotmail.com"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="designer"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> =""</span>
          <span class="red-text">/&gt;</span>
        </p>
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="reply-to"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="email@hotmail.com"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="owner"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> =""</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="url"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="http://www.websiteaddrress.com"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="identifier-URL"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="http://www.websiteaddress.com"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="directory"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="submission"</span>
          <span class="red-text">/&gt;</span>
        </p>
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="pagename"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> =""</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="category"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> =""</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="coverage"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="Worldwide"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="distribution"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="Global"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="rating"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="General"</span>
          <span class="red-text">/&gt;</span>
        </p>
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="revisit-after"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="7 days"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="subtitle"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="This is my subtitle"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="target"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="all"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="HandheldFriendly"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="True"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="MobileOptimized"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="320"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="date"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="Sep. 27, 2010"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="search_date"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="2010-09-27"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="DC.title"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="Unstoppable Robot Ninja"</span>
          <span class="red-text">/&gt;</span>
        </p>
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="ResourceLoaderDynamicStyles"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> =""</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="medium"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="blog"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="syndication-source"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="https://mashable.com/2008/12/24/free-brand-monitoring-tools/"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="original-source"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="https://mashable.com/2008/12/24/free-brand-monitoring-tools/"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="verify-v1"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="dV1r/ZJJdDEI++fKJ6iDEl6o+TMNtSu0kv18ONeqM0I="/></span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="y_key"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="1e39c508e0d87750"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="pageKey"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="guest-home"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        <p>
          <span class="red-text">&lt;meta</span>
          <span class="yellow-text"> name</span>
          <span class="green-text"> ="undefined"</span>
          <span class="yellow-text"> content</span>
          <span class="green-text"> ="jQTouch"</span>
          <span class="red-text">/&gt;</span>
        </p>
  
        `,
        styles: {
          'red-text': '#FDA4AF',
          'yellow-text': '#FCD33F',
          'green-text': '#86EF93',
        }
      },
      set2: {
        html: `<h1>OpenGraph Meta Tags</h1>
        <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> property</span>
        <span style="color: #86EF93;">="og:title"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="The Rock"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> property</span>
        <span style="color: #86EF93;">="og:type"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="movie"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> property</span>
        <span style="color: #86EF93;">="og:url"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="http://www.imdb.com/title/tt0117500/"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="og:title"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="The Rock"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="og:type"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="movie"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="og:url"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="http://www.imdb.com/title/tt0117500/"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="og:image"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="http://ia.media-imdb.com/rock.jpg"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="og:site_name"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="IMDb"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="og:description"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="A group of U.S. Marines, under command of..."</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="fb:page_id"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="43929265776"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="application-name"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="foursquare"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="og:email"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="me@example.com"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="og:phone_number"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="650-123-4567"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
      <span style="color: #FDA4AF;">&lt;meta</span>
      <span style="color: #FCD33F;"> property</span>
      <span style="color: #86EF93;">="og:fax_number"</span>
      <span style="color: #FCD33F;"> content</span>
      <span style="color: #86EF93;">="+1-415-123-4567"</span>
      <span style="color: #FDA4AF;">/&gt;</span>
    </p>
    <p>
    <span style="color: #FDA4AF;">&lt;meta</span>
    <span style="color: #FCD33F;"> property</span>
    <span style="color: #86EF93;">="og:title"</span>
    <span style="color: #FCD33F;"> content</span>
    <span style="color: #86EF93;">="The Rock"</span>
    <span style="color: #FDA4AF;">/&gt;</span>
  </p>
  <!-- Add more meta tags from previous sets -->
  <p>
    <span style="color: #FDA4AF;">&lt;meta</span>
    <span style="color: #FCD33F;"> property</span>
    <span style="color: #86EF93;">="og:latitude"</span>
    <span style="color: #FCD33F;"> content</span>
    <span style="color: #86EF93;">="37.416343"</span>
    <span style="color: #FDA4AF;">/&gt;</span>
  </p>
  <p>
    <span style="color: #FDA4AF;">&lt;meta</span>
    <span style="color: #FCD33F;"> property</span>
    <span style="color: #86EF93;">="og:longitude"</span>
    <span style="color: #FCD33F;"> content</span>
    <span style="color: #86EF93;">="-122.153013"</span>
    <span style="color: #FDA4AF;">/&gt;</span>
  </p>
  <p>
    <span style="color: #FDA4AF;">&lt;meta</span>
    <span style="color: #FCD33F;"> property</span>
    <span style="color: #86EF93;">="og:street-address"</span>
    <span style="color: #FCD33F;"> content</span>
    <span style="color: #86EF93;">="1601 S California Ave"</span>
    <span style="color: #FDA4AF;">/&gt;</span>
  </p>
  <p>
  <span style="color: #FDA4AF;">&lt;meta</span>
  <span style="color: #FCD33F;"> property</span>
  <span style="color: #86EF93;">="og:locality"</span>
  <span style="color: #FCD33F;"> content</span>
  <span style="color: #86EF93;">="Palo Alto"</span>
  <span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
  <span style="color: #FDA4AF;">&lt;meta</span>
  <span style="color: #FCD33F;"> property</span>
  <span style="color: #86EF93;">="og:region"</span>
  <span style="color: #FCD33F;"> content</span>
  <span style="color: #86EF93;">="CA"</span>
  <span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
  <span style="color: #FDA4AF;">&lt;meta</span>
  <span style="color: #FCD33F;"> property</span>
  <span style="color: #86EF93;">="og:postal-code"</span>
  <span style="color: #FCD33F;"> content</span>
  <span style="color: #86EF93;">="94304"</span>
  <span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
  <span style="color: #FDA4AF;">&lt;meta</span>
  <span style="color: #FCD33F;"> property</span>
  <span style="color: #86EF93;">="og:country-name"</span>
  <span style="color: #FCD33F;"> content</span>
  <span style="color: #86EF93;">="USA"</span>
  <span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
  <span style="color: #FDA4AF;">&lt;meta</span>
  <span style="color: #FCD33F;"> property</span>
  <span style="color: #86EF93;">="fb:admins"</span>
  <span style="color: #FCD33F;"> content</span>
  <span style="color: #86EF93;">="987654321"</span>
  <span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
  <span style="color: #FDA4AF;">&lt;meta</span>
  <span style="color: #FCD33F;"> property</span>
  <span style="color: #86EF93;">="og:type"</span>
  <span style="color: #FCD33F;"> content</span>
  <span style="color: #86EF93;">="game.achievement"</span>
  <span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
  <span style="color: #FDA4AF;">&lt;meta</span>
  <span style="color: #FCD33F;"> property</span>
  <span style="color: #86EF93;">="og:points"</span>
  <span style="color: #FCD33F;"> content</span>
  <span style="color: #86EF93;">="POINTS_FOR_ACHIEVEMENT"</span>
  <span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
  <span style="color: #FDA4AF;">&lt;meta</span>
  <span style="color: #FCD33F;"> property</span>
  <span style="color: #86EF93;">="og:video"</span>
  <span style="color: #FCD33F;"> content</span>
  <span style="color: #86EF93;">="http://example.com/awesome.swf"</span>
  <span style="color: #FDA4AF;">/&gt;</span>
</p>
<p> <span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:video:height"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="640"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:video:width"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="385"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:video:type"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="application/x-shockwave-flash"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:video"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="http://example.com/html5.mp4"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:video:type"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="video/mp4"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:video"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="http://example.com/fallback.vid"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:video:type"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="text/html"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:audio"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="http://example.com/amazing.mp3"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:audio:title"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="Amazing Song"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:audio:artist"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="Amazing Band"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:audio:album"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="Amazing Album"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>
<p>
<span style="color: #FDA4AF;">&lt;meta</span>
<span style="color: #FCD33F;"> property</span>
<span style="color: #86EF93;">="og:audio:type"</span>
<span style="color: #FCD33F;"> content</span>
<span style="color: #86EF93;">="application/mp3"</span>
<span style="color: #FDA4AF;">/&gt;</span>
</p>`,
        styles: {}
      },
      set3: {
        html: `<h1>Site Identification Meta Tags</h1>
        <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="microid"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="mailto+http:sha1:e6058ed7fca4a1921cq91d7f1f3b8736cd3cc1g7"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="readability-verification"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="E7aEHvVQpWc8VHDqKvaB2Z58hek2EAv2HuLuegv7"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="google-site-verification"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="4SMIedO1X4IkYrYuhEC2VuovdQM36Xxb0btUjElqQyg"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="ICBM"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="40.746990, -73.980537"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="generator"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="WordPress 3.3.1"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="norton-safeweb-site-verification"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="tz8iotmk-pkhui406y41y5bfmfxdwmaa4a-yc0hm6r0fga7s6j0j27qmgqkmc7oovihzghbzhbdjk-uiyrz438nxsjdbj3fggwgl8oq2nf4ko8gi7j4z7t78kegbidl4"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>`,
        styles: {}
      },
      set4: {
        html: `<h1>Apple Meta Tags</h1>
        <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="apple-mobile-web-app-title"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="My App"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="apple-mobile-web-app-capable"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="yes"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="apple-touch-fullscreen"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="yes"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="apple-mobile-web-app-status-bar-style"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="black"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="format-detection"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="telephone=no"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="viewport"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">=""</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>`,
        styles: {}
      },
      set5: {
        html: `<h1>Internet Explorer Meta Tags</h1> 
        <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="msapplication-starturl"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="http://blog.reybango.com/about/"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="msapplication-window"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="width=800;height=600"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="msapplication-navbutton-color"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="red"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="application-name"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="Rey Bango Front-end Developer"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="msapplication-tooltip"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="Launch Rey Bango Blog"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="msapplication-task"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="name=About;action-uri=/about/;icon-uri=/images/about.ico"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="msapplication-task"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="name=The Big List;action-uri=/the-big-list-of-javascript-css-and-html-development-tools-libraries-projects-and-books/;icon-uri=/images/list_links.ico"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="msapplication-task"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="name=jQuery Posts;action-uri=/category/jquery/;icon-uri=/images/jquery.ico"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="msapplication-task"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="name=Start Developing;action-uri=/category/javascript/;icon-uri=/images/script.ico"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p>
      <p>
        <span style="color: #FDA4AF;">&lt;meta</span>
        <span style="color: #FCD33F;"> name</span>
        <span style="color: #86EF93;">="msvalidate.01"</span>
        <span style="color: #FCD33F;"> content</span>
        <span style="color: #86EF93;">="6E3AD52DC176461A3C81DD6E98003BC9"</span>
        <span style="color: #FDA4AF;">/&gt;</span>
      </p> `,
        styles: {}
      },
    };

    // Return the HTML content and styles for the specified set
    return contentSets[set] || { html: '', styles: {} };
  }

  changeContent(set: string): void {
    // Change the content based on the button clicked
    this.currentContent = this.getHtmlContent(set);
  }
}