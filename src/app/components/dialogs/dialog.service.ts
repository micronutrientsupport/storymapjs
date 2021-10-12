import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataAvaliabilityPercountryComponent } from 'src/app/pages/story-two/dialogs/dataAvaliabilityPerCountry/dataAvaliabilityPerCountry.component';
import { BaseDialogService, DialogData } from './baseDialogService.abstract';
// import { BaselineDescriptionDialogComponent } from './baselineDescriptionDialog/baselineDescriptionDialog.component';
// import { InvalidParametersDialogComponent } from './invalidParametersDialog/invalidParametersDialog.component';
// import { MapSettingsDialogComponent } from './mapSettingsDialog/mapSettingsDialog.component';
// import { ScenarioTypeDialogComponent } from './scenarioTypeDialog/scenarioTypeDialog.component';
// import { ShareDialogComponent } from './shareDialog/dialogShare.component';
@Injectable({
  providedIn: 'root',
})
export class DialogService extends BaseDialogService {
  constructor(public dialog: MatDialog) {
    super(dialog);
  }


  public openDialogForComponent<T = any>(
    contentComponent: ComponentType<any>,
    data?: T,
    width = '80vw',
    height = '80vh',
  ): Promise<DialogData<T>> {
    return this.openDialog('anyDialog', contentComponent, true, data, {
      width,
      height,
    });
  }

  // public openShareDialog(shareLink: string): Promise<DialogData> {
  //   return this.openDialog('sharingDialog', ShareDialogComponent, true, { shareLink });
  // }

  public openStoryTwoDataAvaliabilityPercountryComponent(): Promise<DialogData> {
    return this.openDialog('scenarioTypeDialog', DataAvaliabilityPercountryComponent);
  }

  // public openBaselineDescriptionDialog(): Promise<DialogData> {
  //   return this.openDialog('baselineDescriptionDialog', BaselineDescriptionDialogComponent);
  // }

  // public openMapSettingsDialog(colourPaletteId: string): Promise<DialogData<string>> {
  //   return this.openDialog('mapSettings', MapSettingsDialogComponent, false, colourPaletteId);
  // }

  // public openInvalidParametersDialog(): Promise<DialogData> {
  //   return this.openDialog('invalidParametersDialog', InvalidParametersDialogComponent);
  // }
}
