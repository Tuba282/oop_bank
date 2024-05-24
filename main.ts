#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
import chalkAnimation from "chalk-animation";

// ------------------------------Our-Main-Function------------------------------
async function start() {
  await new Promise((resolve) => {
    figlet.text(
      `Welcome to Bank`,
      { font: "Slant" },
      function (err: any, data: any) {
        if (err) {
          console.dir(`Oops you did some mistake dear`);

          console.log(err);
        }
        let animate = chalkAnimation.rainbow(data);
        setTimeout(() => {
          resolve(animate.stop());
        }, 1000);
      }
    );
  });
}

await start();

async function main() {
  // ------------------------------Welcome-Message------------------------------

  // ------------------------------create-bank-balance------------------------------
  let bank_balance = 70000;
  // ------------------------------getting-customer-details------------------------------

  let Answer_details = await inquirer.prompt([
    {
      name: "name",
      type: "string",
      message: `\nEnter your name \n${chalk.cyan(
        `(less than or equal to 11 letters)`
      )}:`,
    },
    {
      name: "account_number",
      type: "number",
      message: `\nEnter your 6 digit account number.\n${chalk.cyan(
        "recommanded 454545"
      )}`,
    },
  ]);

  // ------------------------------show varification start message------------------------------
  await figlet(
    `varification Start`,
    { font: "Slant", width: 100 },
    function (err, data) {
      if (err) {
        console.dir(`Oops something went wrong!!!`);
        console.log(err);
      }
      console.log(chalk.blueBright(data));
    }
  );
  // ------------------------------create-simple-loader------------------------------
  // const spinner = ora(
  //     "  Please Wait for sec\nIt is Varification checking..."
  //   ).start();
  //   setTimeout(() => {
  //     spinner.succeed("And your are Verified! ");
  //   }, 1000);

  // I made a spinner by using "ora" run for 1 sec and used inside the if condition for varification

  // -------------------------------varification------------------------------

  if (
    Answer_details.name.length < 12 &&
    Answer_details.account_number === 454545
  ) {
    const spinner_1 = ora(
      " 🤚🏻 Please Wait for sec\nIt is Varification checking..."
    ).start();

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(spinner_1.succeed("And your are Verified! 👍🏻"));
        console.log(`\nHello ${chalk.blueBright(
          Answer_details.name
        )} your varification is completed
                \nYour account number is ${chalk.blueBright(
                  Answer_details.account_number
                )}
                \nYour bank balance is ${chalk.blueBright(bank_balance)}`);
      }, 4000)
    );

    // -------------------------------Action------------------------------
    async function asking() {
      let Action = await inquirer.prompt([
        {
          name: "act",
          type: "list",
          message: "\n Plese select kind of Bank Account.",
          choices: ["Savings", "Current Account", "Transfer money"],
        },
      ]);

      // -------------------------------If-Savings------------------------------
      if (Action.act === "Savings") {
        let Answer_amount = await inquirer.prompt([
          {
            name: "amount",
            type: "number",
            message: `\nEnter your ammount...`,
          },
        ]);
        bank_balance += Answer_amount.amount;
        console.log(
          `${chalk.yellow(`\nCongratulations 🌞`)} your savings has been added `
        );
        console.log(
          `\nNow your Bank Balance is ${chalk.blueBright(bank_balance)}`
        );

        console.log(
          `\n${chalk.yellow("\n\nThank you for visiting our Bank 🫶🏻")} `
        );

        console.log(`\n${chalk.bold.blueBright(`🌞 Have great day 🌞`)}`);
      }
      // -------------------------------Current-Account------------------------------
      else if (Action.act === "Current Account") {
        let current_account = await inquirer.prompt([
          {
            name: "list",
            type: "list",
            message: `\nWhat do you wanna do\n`,
            choices: [`Withdraw`, `Deposit`],
          },
        ]);

        if (current_account.list === "Withdraw") {
          // -------------------------------In withdrawal-Asking for amount ------------------------------
          let Answer_amount = await inquirer.prompt([
            {
              name: "amount",
              type: "number",
              message: `\nEnter your ammount...\n`,
            },
          ]);
          //
          // -------------------------------adding little spinner for withdrawal ------------------------------

          const spinner_2 = ora(
            "\n Please wait for little moment 🤏🏻\n\n we are working on your Withdrawal 📜"
          ).start();

          await new Promise((resolve) =>
            setTimeout(() => {
              resolve(spinner_2.succeed("\nYour Withdrawal has been done 🫰🏻"));
            }, 4000)
          );

          // -------------------------------add balance ------------------------------
          bank_balance -= Answer_amount.amount;

          console.log(
            `\n Now your balance is ${chalk.bold.blueBright(bank_balance)}`
          );

          console.log(`\n${chalk.bold.blueBright(`🌞 Have great day 🌞`)}`);
        } else if (current_account.list === "Deposit") {
          // -------------------------------In Deposit-Asking for amount ------------------------------

          let Answer_amount = await inquirer.prompt([
            {
              name: "amount",
              type: "number",
              message: `\nEnter your ammount...\n`,
            },
          ]);
          //
          // -------------------------------adding little spinner for withdrawal ------------------------------

          const spinner_2 = ora(
            "\n Please wait for little moment 🤏🏻\n\n we are working on your Deposit 📜"
          ).start();

          await new Promise((resolve) =>
            setTimeout(() => {
              resolve(spinner_2.succeed("\nYour Deposit has been done 🫰🏻"));
            }, 4000)
          );

          // -------------------------------add balance ------------------------------
          bank_balance += Answer_amount.amount;

          console.log(
            `\n Now your balance is ${chalk.bold.blueBright(bank_balance)}`
          );

          console.log(`\n${chalk.bold.blueBright(`🌞 Have great day 🌞`)}`);
        }
      }
      // -------------------------------Transfer-Money------------------------------
      else if (Action.act === "Transfer money") {
        let Transfer_details = await inquirer.prompt([
          {
            name: "name",
            type: "string",
            message: `\nEnter the person name whom you want to transfer money \n${chalk.cyan(
              `(less than or equal to 11 letters)`
            )}:`,
          },
          {
            name: "account_number",
            type: "number",
            message: `\nEnter your 6 digit account number.`,
          },
          {
            name: "amount",
            type: "input",
            message: `\nEnter the ammount...`,
          },
        ]);

        // ------------------------------Transfer varification message------------------------------
        await figlet(
          `Tranfer varification`,
          { font: "Slant", width: 100 },
          function (err, data) {
            if (err) {
              console.dir(`Oops something went wrong!!!`);
              console.log(err);
            }
            console.log(chalk.yellow(data));
          }
        );
        // ------------------------------Transfer varification message------------------------------
        const spinner_3 = ora(
          `🤚🏻 Please Wait for sec\nIt is Transfer Varification checking...`
        ).start();
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(
              spinner_3.succeed(
                "And your are Transfer Verification is clear! 👍🏻"
              )
            );
          }, 3000)
        );

        // ------------------------------Transfer person message------------------------------
       if(Transfer_details.amount < bank_balance){
        console.log(`\nHello ${chalk.blueBright(
          Transfer_details.name
        )} your varification is completed
                \nYour account number is ${chalk.blueBright(
                  Transfer_details.account_number
                )}
                \nAnd ${chalk.blueBright(
                  Answer_details.name
                )} send Rs ${chalk.blueBright(
          Transfer_details.amount
        )} to your account.`);

        console.log(
          `\n${chalk.green("\n\nThank you for visiting our Bank 🫶🏻")} `
        );

        console.log(`\n${chalk.yellow(
          Transfer_details.name
        )} said: Hey ${chalk.blueBright(Answer_details.name)} 
      \nI have received Rs ${chalk.yellow(Transfer_details.amount)}`);

        console.log(`\n${chalk.bold.blueBright(`🌞 Have great day 🌞`)}`);
        
      }else{
         console.log(`\n${chalk.bold.red(`Sorry Insuficient balance `)}`);
         console.log(`\n${chalk.bold.red(`Your Bank Balance is ${bank_balance} `)}`);
         console.log(`\n${chalk.bold.red(`Please Enter Valid amount.`)}`);
         console.log(`\n${chalk.bold.red(`\n\tThank you \n\n`)}`);

       }
        // ------------------------------End transfer money------------------------------
      }
    }

    await asking();
  } else {
    console.log(chalk.bold.red("\nPlease put valid details"));
    console.log(chalk.bold.red("\nname must be less than 11 characters"));
    console.log(chalk.bold.red("\naccount number must be 6 digits = 454545"));

    console.log(`\n${chalk.bold.blueBright(`🌞 Have great day 🌞`)}`);
  }
}

async function start_again() {
  do {
    await main();
    var again = await inquirer.prompt([
      {
        name: "restart",
        type: "input",
        message: `\nDo you want to go bank again ...?`,
      },
    ]);
  } while (
    again.restart === "Y" ||
    again.restart === "y" ||
    again.restart === "Yes" ||
    again.restart === "yes"
  );
}

await start_again();
