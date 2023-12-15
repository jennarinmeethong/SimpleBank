using Microsoft.EntityFrameworkCore;
using SimpleBank.Backend.Entities;

namespace SimpleBank.Backend.Utilities;
public class SimpleBankDBContext : DbContext
{
    public DbSet<RoleEntity> Roles { get; set; }
    public DbSet<UserEntity> Users { get; set; }
    public DbSet<UserMapRoleEntity> UserMapRoles { get; set; }
    public SimpleBankDBContext() : base() { }
    public SimpleBankDBContext(DbContextOptions<SimpleBankDBContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("utf8mb4");
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<RoleEntity>(ba =>
        {
            ba.HasData(new RoleEntity
            {
                Id = 1,
                Name = "User",
            },
            new RoleEntity
            {
                Id = 2,
                Name = "Admin",
            });
        });
        modelBuilder.Entity<UserEntity>(ba =>
        {
            ba.HasData(new UserEntity
            {
                Id = 1,
                Username = "Admin",
                Password = TextCryptography.Encrypt("P@ssw0rd"),
            });
        });
    }
}