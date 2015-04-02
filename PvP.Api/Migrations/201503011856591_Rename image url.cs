namespace PvP.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Renameimageurl : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Cards", "ImageUrlsString", c => c.String(nullable: false));
            DropColumn("dbo.Cards", "ImageUrls");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Cards", "ImageUrls", c => c.String(nullable: false));
            DropColumn("dbo.Cards", "ImageUrlsString");
        }
    }
}
