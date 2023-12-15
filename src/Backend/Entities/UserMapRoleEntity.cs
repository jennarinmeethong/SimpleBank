namespace SimpleBank.Backend.Entities;

public class UserMapRoleEntity
{
    [Key]
    public int UserId { get; set; }
    [Key]
    public short RoleId { get; set; }
    [ForeignKey(nameof(UserId))]
    public virtual UserEntity User { get; set; } = null!;
    [ForeignKey(nameof(RoleId))]
    public virtual RoleEntity Role { get; set; } = null!;
}
