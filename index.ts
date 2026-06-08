import { Command } from "commander";


const program = new Command();

program.name("TwoClaw").description("TwoClaw is a CLI tool for running two-command workflows.").action(
    async () => {
        console.log("TwoClaw is running...");
    }
)



program.parse(process.argv);
