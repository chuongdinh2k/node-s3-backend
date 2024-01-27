/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("users", (table) => {
    // Add 'address' column
    table.string("address");

    // Add 'avatar' column
    table.string("avatar");

    // Add 'avatar' column
    table.string("first_name");

    // Add 'avatar' column
    table.string("last_name");

    // Add 'avatar' column
    table.string("password");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // In the down migration, you can revert the changes
  return knex.schema.alterTable("users", (table) => {
    // Drop 'address' column
    table.dropColumn("address");

    // Drop 'avatar' column
    table.dropColumn("avatar");

    // Drop 'first_name' column
    table.dropColumn("first_name");

    // Drop 'last_name' column
    table.dropColumn("last_name");

    // Drop 'password' column
    table.dropColumn("password");
  });
};
