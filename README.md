# bookmarker
This is a bookmark app to gather all websites to local storage

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Site Bookmarker</title>

       <link href="css/style.css" rel="stylesheet">
  </head>

  <body>

    <div class="container">
      <header class="header clearfix">
        <nav>
          
        </nav>
        <h3 class="text-muted">Bookmarker</h3>
      </header>

      <main role="main">

        <div class="jumbotron">
          <h2 class="display-3">Bookmark your favorite sites</h2>
          <form id="myForm">
              <div class="form-group">
              <label>Site Name</label>
                  <input type="text" class="form-control" id="siteName" placeholder="Website Name">
              </div>
              <div class="form-group">
              <label>Site URL</label>
                  <input type="text" class="form-control" id="siteURL" placeholder="Website URL">
              </div>
             <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

        <div class="row marketing">
          <div class="col-lg-12">
            <div id="BookmarkResults"></div>
             
          </div>

          
        </div>

      </main>

      <footer class="footer">
        <p>&copy; Bookmarker 2017</p>
      </footer>

    </div> <!-- /container -->
     
      <script src="js/main.js"></script>
     
  </body>
</html>
