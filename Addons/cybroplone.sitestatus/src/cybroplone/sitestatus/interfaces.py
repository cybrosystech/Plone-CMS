# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from zope import schema
from cybroplone.sitestatus import _
from zope.schema.vocabulary import SimpleVocabulary
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer


class ISiteStatusLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


class ISiteStatusSettingSchema(Interface):
    """Client settings for Site Status."""

    status_banner_enabled = schema.Bool(
        title=_(u"Enable / disable status banner"),
        description=_(
            u"When enabled, the banner will be visible"
            u" to all visitors on the website."
        ),
        default=True,
        required=False,
    )


    status_banner_type = schema.Choice(
        title=_(u"Static banner type"),
        default="warning",
        vocabulary=SimpleVocabulary.fromValues(
            ["success", "warning", "error"]
        ),
    )

    status_banner_title = schema.TextLine(
        title=_(u"Static banner title"),
        default=u"Instance under development",
        required=False,
    )

    status_banner_message = schema.Text(
        title=_(u"Static banner message"),
        required=False,
        default=(
            u"Do not use it for operational purposes. "
            u"All changes will be regularly overwritten"
        ),
    )


