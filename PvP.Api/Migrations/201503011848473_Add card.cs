namespace PvP.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Addcard : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cards",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        Word = c.String(nullable: false),
                        Translation = c.String(nullable: false),
                        ImageUrls = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Cards", "UserId", "dbo.Users");
            DropIndex("dbo.Cards", new[] { "UserId" });
            DropTable("dbo.Cards");
        }
    }
}
