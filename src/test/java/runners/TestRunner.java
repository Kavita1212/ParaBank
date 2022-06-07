package runners;
import java.io.File;


import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.ParaBank.managers.FileReaderManager;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		//features = "src/test/resources/features/TransferFunds.feature",
		features = "src/test/resources/features",
		glue= {"stepDefinitions"},
		plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
		monochrome =true,
		dryRun = false
		)
public class TestRunner {	
	
	  @AfterClass
	  public static void writeExtentReport() {
	  Reporter.loadXMLConfig(new
	  File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath())
	  ); }
	 
	 
}


