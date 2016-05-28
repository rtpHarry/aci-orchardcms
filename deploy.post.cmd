@echo off
echo Copying Azure assemblies to /bin from /Modules/Orchard.Azure/bin for dynamic loading of settings from storage blob

echo .. Copying \Modules\Orchard.Azure\bin\Orchard.Azure.dll to \bin
xcopy %DEPLOYMENT_TARGET%\Modules\Orchard.Azure\bin\Orchard.Azure.dll %DEPLOYMENT_TARGET%\bin /y

echo .. Copying \Modules\Orchard.Azure\bin\Orchard.Azure.dll.config to \bin
xcopy %DEPLOYMENT_TARGET%\Modules\Orchard.Azure\bin\Orchard.Azure.dll.config %DEPLOYMENT_TARGET%\bin /y

echo .. Copying \Modules\Orchard.Azure\bin\Microsoft.WindowsAzure.Configuration.dll to \bin
xcopy %DEPLOYMENT_TARGET%\Modules\Orchard.Azure\bin\Microsoft.WindowsAzure.Configuration.dll %DEPLOYMENT_TARGET%\bin /y

echo Finished copy of Azure related files to bin